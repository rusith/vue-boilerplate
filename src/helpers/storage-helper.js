export default {
  /**
   * Get an object from the storage
   * @param {string} name Name of the value in the storage
   */
  get(name) {
    const json = localStorage.getItem(name);
    return JSON.parse(json);
  },

  /**
   * Save an object to the storage
   * @param {*} name Name of the value
   * @param {*} data Data to be saved
   */
  set(name, data) {
    const json = JSON.stringify(data);
    localStorage.setItem(name, json);
  },

  /**
   * Removes a value from the storage
   * @param {string} name Name of the value to be removed
   */
  remove(name) {
    localStorage.removeItem(name);
  },
};
