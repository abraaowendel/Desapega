import styled from 'styled-components';


export const PageArea = styled.div`
   display: flex;
   margin-top: 10px;
   min-height: calc(100vh - 120px);
   .leftSide{
        width: 250px;
       
        form{
            .filterName{
                font-size: 15px;
                margin: 10px 0;
            }
            input, select{
                width: 100%;
                height: 40px;
                padding: 10px;
                outline: none;
                font-size: 15px;
                color: #000;
                border-radius: 5px;
                border: 1px solid
            }
            ul{
                margin-top: 10px;
                .categoryItem {
                    padding: 10px;
                    margin-top: 10px;
                    cursor: pointer;
                    list-style: none;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    span{
                        font-size: 14px;
                    }
                    img{
                        width: 40px;
                        margin-right: 10px;
                    }
                }
                .categoryItem:hover,
                .categoryItem.active{
                    background-color: #ff8100;
                    color: #fff;
                }
            }
        }
   }

   .rigthSide{
        flex: 1;
   }

`;