const nameToID = (name) => {
    if (name) return name.replace(/ /g, '-').replace(/'/g, '').replace(/\./g, '').toLowerCase()
}

export default nameToID