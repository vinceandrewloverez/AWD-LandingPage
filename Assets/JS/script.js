function toggleDescription(feature) {
    const description = feature.querySelector('.description');
    const hiddenText = feature.querySelector('.hidden');

    description.classList.toggle('hidden');
    hiddenText.classList.toggle('hidden');
}