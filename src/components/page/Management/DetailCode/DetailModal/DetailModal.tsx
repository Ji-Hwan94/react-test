import { DetailModalStyled } from "./styled";

export const DetailModal = () => {
    return (
        <DetailModalStyled>
            <div className='container'>
                <label>
                    그룹코드*
                    <input type='text' readOnly></input>
                </label>
                <label>
                    상세코드*
                    <input type='text'></input>
                </label>
                <label>
                    상세코드명*
                    <input type='text'></input>
                </label>
                <label>
                    상세코드설명*
                    <input type='text'></input>
                </label>
                <label>
                    사용여부*
                    <div className='radio-group'>
                        <label>Yes</label>
                        <input type='radio' name='useYn' value={"Y"} />

                        <label>No</label>
                        <input type='radio' name='useYn' value={"N"} />
                    </div>
                </label>
                <div className={"button-container"}>
                    <button type='button'>저장</button>
                    <button type='button'>나가기</button>
                </div>
            </div>
        </DetailModalStyled>
    );
};
