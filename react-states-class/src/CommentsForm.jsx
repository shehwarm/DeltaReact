import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.comment) {
        errors.comment = "Comment is required";
    }
    if (!values.rating) {
        errors.rating = "Rating is required";
    }
    return errors;
};


export default function CommentsForm({addNewComment}) {
    
    const formik = useFormik({
        initialValues: {
            username: '',
            comment: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });


    return (
        <div>
            <h2>Comments Section</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                placeholder="username" 
                type="text" 
                value={formik.values.username} 
                onChange={formik.handleChange} 
                id="username"
                name="username"
                />
                {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}
                <br></br>
                <br></br>

                <label htmlFor="comment">Comment</label>
                <textarea 
                placeholder="comment here" 
                value={formik.values.comment}
                onChange={formik.handleChange} 
                id="comment"
                name="comment"
                >
                    {formik.errors.comment ? <div style={{color: 'red'}}>{formik.errors.comment}</div> : null}
                </textarea>
                <br></br>
                <br></br>

                <label htmlFor="rating">Rating</label>
                <input 
                placeholder="rating" 
                type="number" min="1" max="5" 
                value={formik.values.rating} 
                onChange={formik.handleChange}
                id="rating"
                name="rating"
                />
                {formik.errors.rating ? <div style={{color: 'red'}}>{formik.errors.rating}</div> : null}
                <br></br>
                <br></br>
                <button type="submit">Submit Comment</button>
            </form>
        </div>
    );
}