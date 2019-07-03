import styled from 'styled-components'

export const HeaderWarp = styled.div`
display:flex;
justify-content:space-between;
/* position: fixed;
top: 0;
left: 0; */
width: 100%;
height: 44px;
line-height: 44px;
border-bottom:1px solid #ccc;
overflow:hidden;
  .left{
    margin-left:15px;
    font-size:14px;
  }
  .right{
    margin-right:15px;
    .icon-search{
      font-size:22px;
    }
  }
  .title{
    font-size:17px;
    margin-right:20px;
  }
`
export const MainWarp=styled.div`
  .movie-list-item{
    padding:15px;
    height:75px;
    display:flex;
    justify-content:space-between
  }
  .movie-list-left{
    width:200px;
  }
  .movie-list-right{
    width:100px;
  }

`
