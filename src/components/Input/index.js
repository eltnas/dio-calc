import { InputContainer} from './styles'
const Input = ({value})=> {
    return (
        <div className="App">
            <InputContainer>
                <input disabled value={value} />
            </InputContainer>
        </div>
    );
}

export default Input;