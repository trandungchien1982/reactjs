import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function ProductListPage() {
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(location.pathname); // Ví dụ: /products
  console.log(location.search); // Ví dụ: ?category=electronics&sort=price

  let category = searchParams.get('category');
  let sort = searchParams.get('sort');

  console.log("Category:", category); // electronics
  console.log("Sort:", sort); // price

  // Cập nhật query parameter
  const handleSortChange = (newSort) => {
    searchParams.set('sort', newSort);
    setSearchParams(searchParams); // Cập nhật URL
  };

  const handleSortChangeMulti = (sortMap: Map<string, string>) => {
    for (const [key, value] of sortMap) {
      console.log(`Key: ${key}, Value: ${value}`);
      searchParams.set(key, value);
    }
    searchParams.set('category', 'custom-category_' + Date.now());
    setSearchParams(searchParams); // Cập nhật URL
  };

  useEffect(() => {
    console.log(" -- useEffect khi searchParams co thay doi : " + searchParams);
  }, [searchParams]);

  return (
    <div>
      <h2>Danh sách Sản phẩm</h2>
      <p>Lọc theo danh mục: {category || 'Tất cả'}</p>
      <p>Sắp xếp theo: {sort || 'Mặc định'}</p>
      <button onClick={() => handleSortChange('name')}>OrderBy | name</button>
      <button onClick={() => handleSortChangeMulti(new Map([['sort1', 'name,asc'],['sort2','createdAt,desc'],['sort3','updatedAt,asc']]))}>OrderBy | Multi</button>
      {/* Hiển thị danh sách sản phẩm dựa trên category và sort */}
    </div>
  );
}

export default ProductListPage;