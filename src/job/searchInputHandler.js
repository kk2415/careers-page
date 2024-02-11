import {fetchJobs} from './fetchDataAndRender.js';

export const handleSearch = async () => {
    const checkedCompanies = Array.from(document.querySelectorAll('.checkboxes input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    const inputTag = document.querySelector('.search-input input[type="text"]');
    const keyword = inputTag.value;
    inputTag.value = ''

    try {
        await fetchJobs(checkedCompanies, keyword);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
};

const searchButton = document.querySelector('.search-input button');
searchButton.addEventListener('click', handleSearch);

// 엔터 키를 눌렀을 때 검색 기능 실행
const inputTag = document.querySelector('.search-input input[type="text"]');
inputTag.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
