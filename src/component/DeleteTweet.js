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

    h5 {
       text-align: center;
       color: 302b28;
     margin-bottom: 20px;
      font-weight: 400;
    }
`;
 



function DeleteTweet() {
    const [status, setStatus] = useState(null);
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/1'

    useEffect(() => {
        // DELETE request using axios with async/await
        async function deletePost() {
            await axios.delete(apiUrl);
            setStatus('Delete successful');
        }

        deletePost();
    }, []);

    return (
        <Container>
            <h5 >DELETE Request</h5>
            <div className="card-body">
                Status: {status}
            </div>
        </Container>
    );


  
}

export default DeleteTweet
