import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
`;

export const CategoryFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22%;
    margin: 30px 0 10px 15px;

        input {
            height: 28px;
            padding-left: 10px;
            border: 1px solid ${props => props.theme.background.defaultGrey};
            border-radius: 2px;

            :focus{
                outline: none;
            }
        }
    }
`;

export const Headbar = styled.div`
  display: flex;
  width: 100%;
  min-height: 90px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid ${props => props.theme.background.defaultGrey};

    div {
        color: ${props => props.theme.text.default};
        width: 20%;
        height: 50vh;
        border-left: 1px solid ${props => props.theme.background.defaultGrey};

        :first-of-type {
            border: none;
        }

        span {
            color: ${props => props.theme.text.default};
        }

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: wrap;

            li {
                display: flex;
                align-items: center;
                padding: 3px 0;

                :first-of-type {
                    padding: 0 0 3px;
                }

                p {
                    font-size: 14px;
                    padding: 0 0 0 5px;
                }
        }
    }
`;
