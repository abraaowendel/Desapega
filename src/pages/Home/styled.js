import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #ddd;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;

    .searhBox{
        padding: 20px 15px;
        background-color: #E57700;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);

        display: flex;
        form{
            flex: 1;
            display: flex;
            input, select{
                height: 40px;
                border: 0;
                border-radius: 5px;
                font-size: 15px;
                color: #000;
                margin-right: 20px;
                outline: none;
            }
            input{
                flex: 1;
                padding: 0 10px;
            }
            select{
                width: 100px;
            }
            button{
                height: 40px;
                padding: 0 20px;
                border-radius: 5px;
                background-color: #49AEFF;
                border: 0;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
            }
        }
    }
`;

export const PageArea = styled.div`

`;