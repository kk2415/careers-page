import {fetchJobs} from './fetchDataAndRender.js';

export const handleCheckboxChange = async (event) => {
    const checkedCompany = event.target.value;

    try {
        await fetchJobs(checkedCompany, '')
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }

    // 다른 checkbox들의 선택 해제
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });
};

// checkbox들에 대해 이벤트 리스너 추가
document.querySelectorAll('.checkboxes input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});
