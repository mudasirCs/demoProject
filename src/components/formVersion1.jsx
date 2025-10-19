import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

export function ProductInputForm({products,setProducts}) {
  // const [productImage,setProductImage]=useState(true)

  function productEnlist({name,price,stock,image,description}){
    const newProduct={name:name,
              price:price,
              stock:stock,
              image:image,
              description:description
              }

    setProducts([...products,newProduct])
    console.log(`logging the new product: ${JSON.stringify(newProduct,null,2)}`)
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

  const formik=useFormik({
    initialValues:{
      name:"",
      price:0,
      stock:0,
      image:null,
      description:""
    },
    validationSchema:Yup.object({
      name:Yup.string().required("Name your game! ahem product for now"),
      price:Yup.number().required("Nothing is free! name the price!").positive(),
      stock:Yup.number().min(0).required("You can't have your cake and eat it!"),
      image:Yup.mixed().required("You need to give me something to work with man!"),
      description:Yup.string()
    }),
    onSubmit:values=>{
      productEnlist(values)
      formik.resetForm()
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Enter your good name"
          {...formik.getFieldProps("name")}
        />
      </div>
      {formik.errors.name && formik.touched.name
      ?<div>{formik.errors.name}</div>
      :null
      }
      
      <div>
        <label htmlFor="price">Price</label>
        <input 
          type="number" 
          id="price" 
          placeholder="Nothing is free"
          {...formik.getFieldProps("price")}
        />
      </div>
      {formik.errors.price && formik.touched.price
      ?<div>{formik.errors.price}</div>
      :null
      }

      <div>
        <label htmlFor="stock">Stock</label>
        <input 
          type="number" 
          id="stock" 
          placeholder="How many...tell me!"
          {...formik.getFieldProps("stock")}
        />
      </div>
      {formik.errors.stock && formik.touched.stock
      ?<div>{formik.errors.stock}</div>
      :null
      }

      <div>
        <label htmlFor="image">Upload product image</label>
        <input 
          type="file" 
          id="image" 
          placeholder="Show me what it is!"
          onChange={(event)=>{
              formik.setFieldValue("image",event.currentTarget.files[0])            
          }}
        />
      {formik.errors.image && formik.touched.image
      ?<div>{formik.errors.image}</div>
      :null
      }

{/* 
        <input 
          type="URL" 
          name="image" 
          id="image" 
          placeholder="product-image URL"
          onChange={(event)=>{
            formik.setFieldValue("image",event.currentTarget.files[0])
          }}
          onBlur={formik.handleBlur}
        /> */}
      </div>
      {/* {formik.errors.image && formik.touched.image
      ?<div>{formik.errors.image}</div>
      :null
      } */}

      <div>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description" 
          placeholder="Describe why someone would waste their money on this :)"
          {...formik.getFieldProps("description")}
        >    
        </textarea>
      </div>
      {formik.errors.description && formik.touched.description
      ?<div>{formik.errors.description}</div>
      :null
      }
      

      <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}
