import useFormInput from './useFormInput';
import { useId } from 'react';

function SearchForm({ initValue, type }) {
  const id = useId();
  const dataForm = useFormInput(initValue, type);
  return (
    <div>
      <form method="get" className="w-full">
        <label htmlFor={id} className="sr-only">
          검색창
        </label>
        <input
          {...dataForm.inputProps}
          type="search"
          id={id}
          placeholder="근처에서 검색"
          aria-label="검색할 품목을 입력해주세요"
          className="search-input bg-gray-100 rounded-2xl w-3/4 h-[1.875rem] pl-[0.625rem] text-Contents-contentPrimary pr-[0.625rem]"
        />
      </form>
      <div className="search-info mt-4 px-3">
        {dataForm.filterKeywords.map((keyword, index) => (
          <div key={index} className="flex border-b gap-2 mb-2">
            <span>{keyword}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
