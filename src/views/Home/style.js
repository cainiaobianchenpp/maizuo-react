import styled from 'styled-components';

export const HomeWrapone = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const HomeWraptwo = styled.div`
flex:1;
`;

export const HomeWrapthree = styled.div`
width:100%;
height: 49px;
position: fixed;
bottom:0;
display:flex;
justify-content:space-around;
align-items:center;
border-top:1px solid #ccc
 a{
     text-decoration:none;
     color:#aaa;
     font-size:12px; 
 }
 i {
       display:flex;
       flex-direction:column;
       align-items:center
 }
 .iconfont{
       font-size:20px
 }
 span{
       font-size:12px
 }
 .active{
       color:red
 }
`;
