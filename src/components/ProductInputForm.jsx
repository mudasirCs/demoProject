import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function ProductInputForm({ products, setProducts,editingProduct }) {
  
  function productEnlist({ name, price, stock, image, description }) {
    const imageUrl = image ? URL.createObjectURL(image) : null;
    const newProduct = {
      name: name,
      price: price,
      stock: stock,
      image: imageUrl,
      description: description,
    };

    setProducts([...products, newProduct]);
    console.log(
      `logging the new product: ${JSON.stringify(newProduct, null, 2)}`
    );
    // alert(displayProduct)
  }

  // const validate=values=>{
  //   const errors={}

  //   Object.keys(values).forEach(key=>{
  //     if(!values[key]){
  //       errors[key]=`${key} is a required field`
  //     }
  //   })

  //   return errors
  // }

  return (
    <Formik
      initialValues={editingProduct||{
        name: "",
        price: 0,
        stock: 0,
        image: null,
        description: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name your game! ahem product for now"),
        price: Yup.number()
          .required("Nothing is free! name the price!")
          .positive(),
        stock: Yup.number()
          .min(0)
          .required("You can't have your cake and eat it!"),
        image: Yup.mixed().required(
          "You need to give me something to work with man!"
        ),
        description: Yup.string(),
      })}
      onSubmit={(values,{resetForm}) => {
        productEnlist(values);
        resetForm()
      }}
    >
      {({errors,setFieldValue,touched})=>(
      <Form className="form-field">
        <div>
          <label htmlFor="name">Name </label>
          <Field type="text" name="name" placeholder="Name of the goods please"/>
          <ErrorMessage name="name" />
        </div>

        <div  >
          <label htmlFor="price">Price </label>
          <Field type="number" name="price" placeholder="Nothing is free" />
          <ErrorMessage name="price" />
        </div>

        <div  >
          <label htmlFor="stock">Stock </label>
          <Field type="number" name="stock" placeholder="How many...tell me!" />
          <ErrorMessage name="stock" />
        </div>

        <div className="ml-4 mt-3 text-nowrap flex flex-col justify-center items-center  gap-4">
          <label htmlFor="image">Upload Product Image </label>
          <input className="-mt-4"
            name="image"
            id="image"
            type="file"
            onChange={(event) =>
              setFieldValue("image", event.currentTarget.files[0])
            }
          />
          {errors.image && touched.image && <div>{errors.image}</div>}
        </div>
        

        <div className="h-32" >
          <label htmlFor="description">Description </label>
          <Field
            as="textarea"
            name="description"
            placeholder="Describe why someone would waste their money on this :)"
          />
          <ErrorMessage name="description" />
        </div>

        <button className="bg-gray-600 font-bold text-white p-3 rounded-xl my-2" type="submit">Submit Product</button>
      </Form>
    )}
    </Formik>
  );
}
