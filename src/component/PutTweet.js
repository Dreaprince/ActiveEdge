import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
   max-width: 720px;
   border: solid 1px #ebebeb;
   box-sizing: border-box;
   padding: 20px 55px;
  font-family: Arial, Helvetica, sans-serif;

    h3 {
       text-align: center;
       color: 302b28;
     margin-bottom: 20px;
      font-weight: 400;
    }
`;
 

   

const Box = styled.div`
  /* display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   width: 100%;
   max-width: 600px; */

   div {
       margin: 20px;
   }

   label {
       margin: 20px;
       padding: 3px;
       
   }

   h6 {
   color: #000000;
   font-size: 10px;
   
  }
`;

function PutTweet() {
  const [name, setName] = useState('Toheeb');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
  
}

    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/2'

    useEffect(() => {
        axios.put(apiUrl, data).then(res => {
            setData(res.data);
            setName('');
            setBody('');
            setLoading(false);
          }).catch(err => {
            setLoading(false);
            setIsError(true);
          }); 
    },{})
   
  

    return (
        <Container>
        <h3>Edit Tweet</h3>
            <Box>
                <div classNames="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div classNames="form-group">
                <label htmlFor="body" className="mt-2">Body</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="body"
                    placeholder="edit tweet"
                    value={body}
                    onChange={e => setBody(e.target.value)} />
                </div>
                {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
                disabled={loading}
                >{loading ? 'Loading...' : 'Submit'}</button>
            </Box>
        </Container>
    )
}

export default PutTweet