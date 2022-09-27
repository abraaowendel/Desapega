import styled from 'styled-components';

export const PageArea = styled.div`
    margin: 35px 0;
    .box{
        max-width: 500px;
        margin: 10px auto;
        min-height: 420px;
        background-color: #FFF;
        box-shadow: 0 0 3px #999;
        padding: 10px 0;
        text-align: center;
        border-radius: 5px;
        form{
            .category{
                display: flex;
                    select{
                        display: block;
                        height: 20px;
                        width: 20px;
                        margin: 6px 0 0;
                    }
            }
            .area--check{
                display: flex;
                align-items: center;
                justify-content: start;
                padding: 0px 40px;
                margin: 20px 0;
                .area--input{
                    input{
                        accent-color: #DF7229;
                        cursor: pointer;
                        margin-left: 10px;
                        margin-top: 8px;
                    }
                }      
                .area--title{
                    cursor: pointer;
                    user-select: none;
                    font-size: 14.8px;
                    color: #E57700;
                }     
            }
          
            .area{
                display: block;
                padding: 0px 40px;
                .area--title{
                    color: #DF7229;
                    margin: 15px 0 10px;
                    font-weight: 700;
                    font-size: 16px;
                    min-width: 90px;
                    text-align: start;
                }

                .area--input{
                    input,textarea, option{
                        display: block;
                        flex: 1;
                        resize: none;
                        width: 100%;
                        padding: 12px 8px; 
                        border: 1px solid #CCC;
                        outline: none;
                        transition: all ease .3s;
                        border-radius: 5px;
                        &:focus{
                            border-color: #DF7229;
                        }
                        &::placeholder{
                            font-size: 15px;
                        }
                    }
                }
                button{
                    display: block;
                    margin: 20px auto;
                    width: 100%;
                    cursor: pointer;
                    background-color: #DF7229;
                    border: 0;
                    outline: 0;
                    padding: 10px;
                    color:#FFF;
                    font-size: 15px;
                    border-radius: 3px;
                    transition: all ease .2s;
                    &:hover{
                        opacity: 0.9;
                    }
                }
                textarea{
                    flex: 1;
                    min-height: 200px;
                }
                .category{
                    display: flex;
                    align-items: center;
                    select{
                        display: block;
                        height: 20px;
                        width: 20px;
                    }
                }
            }      
        }   
    }
`;



export const PageTitle = styled.h2`
    margin: 10px 0 30px;
    color: #DF7229;
    padding-bottom: 20px;
    border-bottom: 1px solid #DF7229;
         
`;
