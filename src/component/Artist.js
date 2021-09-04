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

   h6 {
   color: #000;
   font-size: 10px;
   
  }
`;



 




function Artist() {
    const [artists, setArtists] = useState([]);

   const apiUrl = 'https://jsonplaceholder.typicode.com/users'


   useEffect(() => {
       const getArtist = async () => {
           try {
              const response = await axios.get(apiUrl);
              setArtists(response.data);
           } catch (error) {
              console.log(error)
           }
       };
      getArtist();
   },[]);

    return (
       <>
         <Container>
             <h3>Chocolate City Artist</h3>
             <Box>  
               {artists && artists.map((d) => {
                  return(
               
                     <ul key={d.id}>
                        <h6>{d.name}</h6>
                     </ul>  
                  );
               })}    
            </Box>
         </Container>
       </>
    )
}

export default Artist
