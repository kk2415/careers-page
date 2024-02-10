import {HttpClient} from '../api/index.js';

export const fetchJobs = async (company) => {
    try {
        const response = await HttpClient.get(`/api/v1/jobs?company=${company}`)
        const jobs = response.data.jobs;
        const listContainer = document.querySelector(".list-container");

        jobs.forEach(job => {
            const listItem = document.createElement("div");
            listItem.classList.add("list-item");

            const logoImg = document.createElement("img");
            logoImg.src = "logo1.png"; // 로고 이미지 경로 설정
            logoImg.alt = "로고 이미지";

            const itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");

            const title = document.createElement("h3");
            title.textContent = job.title;

            const noticeEndDate = document.createElement("p");
            noticeEndDate.textContent = `채용 기간: ${job.noticeEndDate}`;

            const groupName = document.createElement("p");
            groupName.classList.add("group-name");
            groupName.textContent = `그룹: ${job.jobGroup}`;

            itemDetails.appendChild(title);
            itemDetails.appendChild(noticeEndDate);
            itemDetails.appendChild(groupName);

            listItem.appendChild(logoImg);
            listItem.appendChild(itemDetails);

            listContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("API 호출 에러:", error);
    }
};
