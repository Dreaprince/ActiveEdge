import React, {useEffect, useState} from 'react'
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

   h2 {
   color: #000;
   font-size: 20px;
   
  }

  p {
    text-align: center;
      color: 302b28;
      margin-bottom: 50px;
      /* font-weight: 400; */
   }
`;



 




function Tweets() {
    const [tweets, setTweets] = useState([]);

   const apiUrl = 'https://jsonplaceholder.typicode.com/comments'


   useEffect(() => {
       const getTweet = async () => {
           try {
              const response = await axios.get(apiUrl);
              setTweets(response.data);
           } catch (error) {
              console.log(error)
           }
       };
      getTweet();
   },[]);

    return (
       <>
         <Container>
             <h3>Chocolate Artist Tweet</h3>
             <Box>  
               {tweets && tweets.map((d) => {
                  return(
               
                     <ul key={d.id}>
                        <h2>{d.name}</h2>
                        <p>{d.body}</p>
                     </ul>  
                  );
               })}    
            </Box>
         </Container>
       </>
    )
}

export default Tweets
