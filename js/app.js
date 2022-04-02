'use strict';
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})
const fetchData = async () => {
    try {
        const getResult = await fetch('https://api.adviceslip.com/advice');
        const data = await getResult.json()
        console.log(data);
        const advice = {
            id: data.slip.id,
            text: data.slip.advice,
        }
        showAdvice(advice);
    } catch (error) {
        console.log(error);
    }
}
const showAdvice = (advice) => {
    console.log(advice);
    const container = document.getElementById('container-template');
    const template = document.getElementById('templateAdvice').content;
    const templateClone = template.cloneNode(true);
    const templateFragment = document.createDocumentFragment();
    templateClone.getElementById('idAdvice').textContent = `${advice.id}`
    templateClone.getElementById('textAdvice').textContent = advice.text;
    templateFragment.appendChild(templateClone);
    container.appendChild(templateFragment)
}
document.getElementById('newAdvice').addEventListener('click', () => {
    location.reload()
});
