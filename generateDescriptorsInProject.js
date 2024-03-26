import getVirtualItemsFromApi from "./getItemsFromApi.js";
import downloadAndSaveDescriptors from './downloadDescriptors.js';

const parentFolder = './data'; 


(
  async () => {
    const filesTypes = [
      '.fset',
      '.fset3',
      '.iset',
    ]

    const imgsIds = await getVirtualItemsFromApi()


    for(let item of imgsIds) {
      for(let filesType of filesTypes) {
        downloadAndSaveDescriptors(`${item.urlDescriptor}${filesType}`, `${parentFolder}/${item.id}`)
      }
    }

  }
)()
