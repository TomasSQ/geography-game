Storage.prototype.setObject = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

Storage.prototype.getObject = (key) => {
    let value = localStorage.getItem(key)
    return value && JSON.parse(value)
}

Storage.prototype.getObjects = (key) => {
    let objects = localStorage.getObject(key)
    return Array.isArray(objects) ? objects : []
}

Storage.prototype.addToObjects = (key, value) => {
    let objects = localStorage.getObjects(key)
    objects.push(value)
    localStorage.setObject(key, objects)
}

const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

export default uuidv4
