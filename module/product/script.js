pagemodule = 'Product';
colSpanCount = 9;
setDataType('product');
fetchAndUpdateData();

  window.rowTemplate = function (item, index, perPage = 10) {
    const { currentPage } = state[currentDataType];
    const globalIndex = (currentPage - 1) * perPage + index + 1;
  
    return `
  <tr class="flex flex-col sm:table-row border rounded sm:rounded-none mb-4 sm:mb-0 shadow-sm sm:shadow-none transition hover:bg-gray-50">
    <td class="px-6 py-4 text-sm border-b sm:border-0 flex justify-between sm:table-cell bg-gray-800 text-white sm:bg-transparent sm:text-gray-700">
      <span class="font-medium sm:hidden">Kode</span>
      ${item.productcode}
    </td>
  
     <td class="px-6 py-4 text-sm text-gray-700 border-b sm:border-0 flex justify-between sm:table-cell">
    <span class="font-medium sm:hidden">Barang</span>  
    ${item.product}
    </td>

  
    <td class="px-6 py-4 text-sm text-right text-gray-700 border-b sm:border-0 flex justify-between sm:table-cell">
      <span class="font-medium sm:hidden">Harga</span>
      ${formatRupiah(item.sale_price)}
    </td>
  
     <td class="px-6 py-4 text-sm text-center text-gray-700 border-b sm:border-0 flex justify-between sm:table-cell">
    <span class="font-medium sm:hidden">Kategori</span>  
    ${item.category}
    </td>
  
     <td class="px-6 py-4 text-sm text-right text-gray-700 border-b sm:border-0 flex justify-between sm:table-cell">
    <span class="font-medium sm:hidden">Stok</span>  
    ${item.weight} gr
    </td>
  
  
    <td class="px-6 py-4 text-sm text-center text-gray-700 flex justify-between sm:table-cell">
      <span class="font-medium sm:hidden">Kemitraan</span>
        ${item.business_categories.length > 0 
          ? item.business_categories.map(cat => cat.business_category).join(', ') 
          : '-'}
      <div class="dropdown-menu hidden fixed w-48 bg-white border rounded shadow z-50 text-sm">
       <button onclick="event.stopPropagation(); loadModuleContent('product_form', '${item.product_id}', '${item.product.replace(/'/g, "\\'")}');" class="block w-full text-left px-4 py-2 hover:bg-gray-100">
        ✏️ Edit Product
      </button>
        <button onclick="event.stopPropagation(); handleDelete(${item.product_id})" class="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
          🗑 Delete Product
        </button>
      </div>
    </td>
  </tr>`;
  };
  
  

  document.getElementById('addButton').addEventListener('click', () => {
    // showFormModal();
    // loadDropdownCall();
    loadModuleContent('product_form');
  });

