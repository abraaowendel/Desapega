import styled from 'styled-components';

export const PageArea = styled.div`
    form{
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 3px #999;

        .area{
            display: flex;
            align-items: center;
            max-width: 500px;
            padding: 10px;

            .area--title{
                width: 200px;
                padding-right: 10px;
                text-align: right;
                font-weight: 700;
                font-size: 14px;
            }

            .area--input{
                flex: 1;
                input{
                    width: 100%;
                    padding: 8px 5px; 
                    border: 1px solid #DDD;
                    outline: none;
                    transition: all ease .3s;
                    border-radius: 5px;

                    &:focus{
                        border-color:  #333;
                    }
                }
                input[type=checkbox]{                    
                    width: auto;
                    margin-top: 7px;
                    border-radius: 15px;
                    
                }
            }
            button{
                cursor: pointer;
                background-color: #0089FF;
                border: 0;
                outline: 0;
                padding: 6px 10px;
                color:#FFF;
                font-size: 14px;
                border-radius: 3px;
            }
        }

    }
    
    
`;

