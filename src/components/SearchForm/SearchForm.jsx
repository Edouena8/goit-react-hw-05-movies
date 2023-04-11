import { FcSearch } from 'react-icons/fc';
import { InputContainer, FormWrap, FormButton, ButtonLabel, FormInput } from "./SearchForm.styled";

const SeaechForm = ({handleFormSubmit}) => {
    return (
        <InputContainer>
            <FormWrap onSubmit={handleFormSubmit}>  
                <FormButton type="submit">
                    <FcSearch width={40} height={40}/>
                    <ButtonLabel>Search</ButtonLabel>
                </FormButton>

                <FormInput 
                    type="text"
                    name="filmtitle"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    // onChange={onParamsChange}
                />
                
            </FormWrap>
        </InputContainer>
    )
};

export default SeaechForm;