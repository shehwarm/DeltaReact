import { use, useState } from "react";

export default function Form() {
    let[formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

   let handleInputChange = (event) => { 
        setFormData( (currData) => {
            return {
                ...currData,
                [event.target.id]: event.target.value
            };
        })
   };

   let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
   }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input 
             placeholder="enter full name"
             type="text" 
             value={formData.fullName}
             onChange={handleInputChange}
             id="fullName"
             name="fullName"
             />
            <button>Submit</button>
               <br></br>
               <br></br>
            <label htmlFor="username">Username</label>
            <input 
             placeholder="enter username"
             type="text" 
             value={formData.username}
             onChange={handleInputChange}
             id="username"
             name="username"
             />
            <button>Submit</button>

             <br></br>
               <br></br>
            <label htmlFor="password">Password</label>
            <input 
             placeholder="enter password"
             type="password" 
             value={formData.password}
             onChange={handleInputChange}
             id="password"
             name="password"
             />
            <button>Submit</button>
        </form>
    );
}