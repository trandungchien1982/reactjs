import React from 'react';

// Hàm HOC
function withLoading(WrappedComponent) {
  // Trả về một component Functional mới
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Đang tải dữ liệu...</p>;
    }
    // Truyền tất cả các props còn lại xuống WrappedComponent
    return <WrappedComponent {...props} />;
  };
}

export default withLoading;