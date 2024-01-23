import {deleteControl, formControl, modalControl} from './script/control';
import features from './script/features';
import {renderContacts, renderPhoneBook} from './script/render';
import * as storage from './script/serviceStorage';

import './index.html';

import './css/normalize.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

const {hoverRow, sortTable} = features;
{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = storage.getStorage(title);

    const {
      table,
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    // Функционал
    const allRow = renderContacts(title, list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(title, btnDel, list);
    sortTable(table, list);
    formControl(title, form, list, closeModal);
  };

  init('#app', 'Tatyana');
}
