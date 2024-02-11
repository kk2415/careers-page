import {HttpClient} from '/src/api/index.js';

const bindingCompanyLogoImage = (companyName) => {
    switch (companyName) {
        case "KAKAO":
            return "image/company/kakao/logo_1.png";
        case "BAMIN":
            return "image/company/bamin/logo_1.jpg";
        case "LINE":
            return "image/company/line/logo_1.png";
        case "NAVER":
            return "image/company/naver/logo_1.png";
        case "TOSS":
            return "image/company/toss/logo_1.png";
        case "CARROT_MARKET":
            return "image/company/carrot/logo_1.jpg";
        case "BUCKET_PLACE":
            return "image/company/bucket/logo_1.jpg";
        case "YANOLJA":
            return "image/company/yanolja/logo_1.jpg";
        case "SOCAR":
            return "image/company/socar/logo_1.png";
        case "SK":
            return "image/company/sk/logo_1.png";
    }
}

export const fetchJobs = async (company, keyword) => {
    try {
        const defaultImagePath = 'image/no-jobs-1.jpg'
        const response = await HttpClient.get(`/api/v1/jobs?company=${company}&keyword=${keyword}`)
        const listContainer = document.querySelector(".list-container");
        const jobCountElement = document.querySelector(".job-count");
        const jobs = response.data.jobs;

        const jobCount = jobs.length;
        jobCountElement.textContent = `${jobCount}개의 채용공고가 있습니다.`

        // list-container 초기화
        listContainer.innerHTML = '';

        if (jobs.length === 0) {
            const defaultImageContainer = document.createElement('div');
            defaultImageContainer.classList.add('no-job-image-container');

            const defaultImage = document.createElement('img');
            defaultImage.classList.add('no-job-image')
            defaultImage.src = defaultImagePath;
            defaultImage.alt = '이미지 없음';

            const noJobText = document.createElement('p');
            noJobText.textContent = '채용공고가 없습니다...';
            noJobText.classList.add('no-job-text')

            defaultImageContainer.appendChild(noJobText);
            defaultImageContainer.appendChild(defaultImage);

            listContainer.appendChild(defaultImageContainer);
        } else {
            jobs.forEach(job => {
                const listItem = document.createElement("div");
                listItem.classList.add("list-item");

                const logoImg = document.createElement("img");
                logoImg.src = bindingCompanyLogoImage(job.company);
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

                listItem.addEventListener('click', function() {
                    window.open(job.url, '_blank');
                });

                itemDetails.appendChild(title);
                itemDetails.appendChild(noticeEndDate);
                itemDetails.appendChild(groupName);

                listItem.appendChild(logoImg);
                listItem.appendChild(itemDetails);

                listContainer.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error("API 호출 에러:", error);
    }
};
