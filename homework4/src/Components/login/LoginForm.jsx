import InputId from './IdPwInput/InputId';
import InputPw from './IdPwInput/InputPw';
import useCheckedValue from './IdPwInput/useCheckedValue';
import LoginButton from './LoginButton/LoginButton';
import useFetch from './LoginButton/useFetch';
import pb from '../../api/pocketbase';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('Email');
    if (rememberedEmail) {
      idSetValue(rememberedEmail);
    }
  }, []);

  const api = 'users';
  const { data } = useFetch(api);

  const idRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const pwRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const {
    value: idValue,
    checkedValue: checkedIdValue,
    handleInput: handleIdInput,
    setValue: idSetValue,
  } = useCheckedValue(idRegex);
  const {
    value: pwValue,
    checkedValue: checkedPwValue,
    handleInput: handlePwInput,
  } = useCheckedValue(pwRegex);

  const handleLoginClick = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const checkedId = await pb
        .collection('users')
        .authWithPassword(idValue, pwValue);
      if (checkedId) {
        console.log('다음페이지로');
        if (isChecked) {
          localStorage.setItem('Email', idValue);
        } else {
          localStorage.removeItem('Email');
        }
      }
    } catch (error) {
      console.log('로그인 에러', error);
      if (error.status === 400) {
        alert('정보가 잘못되었습니다.');
      } else {
        alert('로그인 중 문제가 발생되었습니다. 다시 시도해 주세요.');
      }
    }
  };

  const handleCreateClick = async () => {
    const userData = {
      email: idValue,
      password: pwValue,
      passwordConfirm: pwValue,
    };
    try {
      const create = await pb.collection('users').create(userData);
      if (create) {
        alert('회원가입 성공');
      }
    } catch (error) {
      if (error.status === 400) {
        console.log('400', error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#FFE650] h-screen gap-40">
      <form method="post">
        <div className="flex flex-col gap-1 mb-3">
          <InputId value={idValue} onChange={handleIdInput}>
            {!checkedIdValue && idValue && (
              <p className="text-sm text-error">
                이메일을 올바르게 입력해주세요.
              </p>
            )}
          </InputId>
          <InputPw value={pwValue} onChange={handlePwInput}>
            {!checkedPwValue && pwValue && (
              <p className="text-sm text-error">
                최소 8자리 알파벳,숫자,특수문자를 조합해주세요.
              </p>
            )}
          </InputPw>
        </div>
        <LoginButton onClick={handleLoginClick} />
        <div className="flex gap-2 mt-4">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={isChecked}
            onChange={handleChecked}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
      </form>
      <button
        type="button"
        className="bg-[#ffff] px-20 py-1 rounded-sm font-semibold"
        onClick={handleCreateClick}
      >
        계정 생성하기
      </button>
    </div>
  );
}
