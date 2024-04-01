function saveFunction(array, id) {
    return array.filter((element) => +element.id == +id);
}

export default saveFunction;
