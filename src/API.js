import axios from 'axios';

function kebabCaseToCamel(str) {
    return str.replace( /(\-\w)/g, (matches) => matches[1].toUpperCase())
}

class API {
  constructor(){
    this.url = 'http://lara-post.test/api'
    this.endpoints = {}
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    /**
     * If there is a - in the entity.name, then change it 
     * to camelCase. E.g 
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */
    const name = kebabCaseToCamel(entity.name)
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity)
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints( { name } ) {
    var endpoints = {}

    const resourceURL = `${this.url}/${name}`
    

    endpoints.getAll = async (pageNum = 1) => 
    {
      const axiosData = await axios.get(resourceURL, {
        params : {
          page : pageNum
        }
      })

      return axiosData.data;
    }

    endpoints.getOne = async (id) =>
    {
      const axiosData = await axios.get(resourceURL+'/'+id);
      return axiosData.data;
    }

    endpoints.create = async (createObj) =>
    {
      const axiosData = await axios.post(resourceURL, createObj);
      return axiosData.data;
    }

    endpoints.update = async (id, updateObj) =>
    {
      const axiosData = await axios.put(resourceURL+'/'+id, updateObj);
      return axiosData.data;
    }


    endpoints.delete = async (id) =>
    {
      const axiosData = await axios.delete(resourceURL+'/'+id);
      return axiosData.data;
    }

    return endpoints

  }

}

export default API