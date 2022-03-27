var lunarMonthTable = [
  [1,2,2,1,2,1,2,1,2,1,1,2],
  [2,1,2,5,2,1,2,1,2,1,2,1],
  [1,2,2,1,2,1,2,2,1,2,1,2] /* 1801 */,
  [1,1,2,1,2,1,2,2,2,1,2,1],
  [2,3,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,1,1,2,2,1,2,2,2],
  [1,2,1,2,1,3,2,1,2,2,2,1],
  [2,2,1,2,1,1,1,2,1,2,2,1],
  [2,2,2,1,1,2,1,1,2,1,2,2],
  [1,2,2,1,5,2,1,2,1,1,2,1],
  [2,2,1,2,2,1,2,1,2,1,1,2],
  [1,2,1,2,2,1,2,2,1,2,1,2],
  [1,1,5,2,1,2,2,1,2,2,1,2] /* 1811 */,
  [1,1,2,1,2,1,2,1,2,2,2,1],
  [2,1,2,1,1,1,2,1,2,2,2,1],
  [2,5,2,1,1,1,2,1,2,2,1,2],
  [2,2,1,1,2,1,1,2,1,2,1,2],
  [2,2,1,2,1,5,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,2,1,1,2,1],
  [2,1,2,2,1,2,2,1,2,1,1,2],
  [1,2,1,5,2,2,1,2,2,1,2,1],
  [1,2,1,2,1,2,1,2,2,2,1,2],
  [1,1,2,1,1,2,1,2,2,2,1,2] /* 1821 */,
  [2,1,5,1,1,2,1,2,2,1,2,2],
  [2,1,2,1,1,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,4,1,2,1,2,2],
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,1,2,1,2,1],
  [2,1,2,2,4,1,2,1,2,1,2,1],
  [2,1,2,1,2,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,1,2,2,1,2,2],
  [1,1,2,3,2,1,2,2,1,2,2,2],
  [1,1,2,1,1,2,1,2,1,2,2,2] /* 1831 */,
  [1,2,1,2,1,1,2,1,5,2,2,2],
  [1,2,1,2,1,1,2,1,2,1,2,2],
  [1,2,2,1,2,1,1,2,1,2,1,2],
  [1,2,2,1,2,5,1,2,1,2,1,2],
  [1,2,1,2,2,1,2,1,2,1,2,1],
  [2,1,2,1,2,1,2,2,1,2,1,2],
  [1,2,1,5,1,2,2,1,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,2,1],
  [2,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,4,1,1,2,1,2,1,2,2,1] /* 1841 */,
  [2,2,1,2,1,1,2,1,2,1,2,1],
  [2,2,2,1,2,1,4,1,2,1,2,1],
  [2,2,1,2,1,2,1,2,1,2,1,2],
  [1,2,1,2,2,1,2,1,2,1,2,1],
  [2,1,2,1,5,2,1,2,2,1,2,1],
  [2,1,1,2,1,2,1,2,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,2,1],
  [2,1,2,3,2,1,2,1,2,1,2,2],
  [2,1,2,1,1,2,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,3,2,1,2,2] /* 1851 */,
  [2,1,2,2,1,1,2,1,2,1,1,2],
  [2,1,2,2,1,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,5,2,1,2,1,2],
  [1,1,2,1,2,2,1,2,2,1,2,1],
  [2,1,1,2,1,2,1,2,2,2,1,2],
  [1,2,1,1,5,2,1,2,1,2,2,2],
  [1,2,1,1,2,1,1,2,2,1,2,2],
  [2,1,2,1,1,2,1,1,2,1,2,2],
  [2,1,6,1,1,2,1,1,2,1,2,2],
  [1,2,2,1,2,1,2,1,2,1,1,2] /* 1861 */,
  [2,1,2,1,2,2,1,5,2,1,1,2],
  [1,2,2,1,2,1,2,2,1,2,1,2],
  [1,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,4,1,2,2,1,2,2,1],
  [2,1,1,2,1,1,2,2,1,2,2,2],
  [1,2,1,1,2,1,1,2,1,2,2,2],
  [1,2,2,3,2,1,1,2,1,2,2,1],
  [2,2,2,1,1,2,1,1,2,1,2,1],
  [2,2,2,1,2,1,2,1,1,5,2,1],
  [2,2,1,2,2,1,2,1,2,1,1,2] /* 1871 */,
  [1,2,1,2,2,1,2,1,2,2,1,2],
  [1,1,2,1,2,4,2,1,2,2,1,2],
  [1,1,2,1,2,1,2,1,2,2,2,1],
  [2,1,1,2,1,1,2,1,2,2,2,1],
  [2,2,1,1,5,1,2,1,2,2,1,2],
  [2,2,1,1,2,1,1,2,1,2,1,2],
  [2,2,1,2,1,2,1,1,2,1,2,1],
  [2,2,4,2,1,2,1,1,2,1,2,1],
  [2,1,2,2,1,2,2,1,2,1,1,2],
  [1,2,1,2,1,2,5,2,2,1,2,1] /* 1881 */,
  [1,2,1,2,1,2,1,2,2,1,2,2],
  [1,1,2,1,1,2,1,2,2,2,1,2],
  [2,1,1,2,3,2,1,2,2,1,2,2],
  [2,1,1,2,1,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,2,1,5,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,1,2,1,2,1],
  [2,1,2,2,1,2,1,2,1,2,1,2],
  [1,5,2,1,2,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,1,2,2,1,2,2] /* 1891 */,
  [1,1,2,1,1,5,2,2,1,2,2,2],
  [1,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,1,2,1,1,2,1,2,1,2,2],
  [2,1,2,1,5,1,2,1,2,1,2,1],
  [2,2,2,1,2,1,1,2,1,2,1,2],
  [1,2,2,1,2,1,2,1,2,1,2,1],
  [2,1,5,2,2,1,2,1,2,1,2,1],
  [2,1,2,1,2,1,2,2,1,2,1,2],
  [1,2,1,1,2,1,2,5,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,2,1] /* 1901 */,
  [2,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,1,2,3,2,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,1,1,2,2,1],
  [2,2,1,2,2,1,1,2,1,2,1,2],
  [1,2,2,4,1,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,1,1,2,2,1,2,1,2,2,1,2],
  [1,5,1,2,1,2,1,2,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,2,1],
  [2,1,2,1,1,5,1,2,2,1,2,2] /* 1911 */,
  [2,1,2,1,1,2,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,1,1,2,1,2],
  [2,2,1,2,5,1,2,1,2,1,1,2],
  [2,1,2,2,1,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,3,2,1,2,2,1,2,2,1,2,1],
  [2,1,1,2,1,2,1,2,2,1,2,2],
  [1,2,1,1,2,1,5,2,1,2,2,2],
  [1,2,1,1,2,1,1,2,2,1,2,2],
  [2,1,2,1,1,2,1,1,2,1,2,2] /* 1921 */,
  [2,1,2,2,3,2,1,1,2,1,2,2],
  [1,2,2,1,2,1,2,1,1,2,1,2],
  [2,1,2,1,2,2,1,2,1,2,1,1],
  [2,1,2,5,2,1,2,2,1,2,1,2],
  [1,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,1,2,1,2,2,1,2,2],
  [1,5,1,2,1,1,2,2,1,2,2,2],
  [1,2,1,1,2,1,1,2,1,2,2,2],
  [1,2,2,1,1,5,1,2,1,2,2,1],
  [2,2,1,2,1,2,1,1,2,1,2,1] /* 1931 */,
  [2,2,2,1,2,1,2,1,1,2,1,2],
  [1,2,2,1,6,1,2,1,2,1,1,2],
  [1,2,1,2,2,1,2,1,2,2,1,2],
  [1,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,4,1,1,2,2,1,2,2,2,1],
  [2,1,1,2,1,1,2,1,2,2,2,1],
  [2,2,1,1,2,1,4,1,2,2,1,2],
  [2,2,1,1,2,1,1,2,1,2,1,2],
  [2,2,1,2,1,2,1,1,2,1,2,1],
  [2,2,1,2,2,4,1,1,2,1,2,1] /* 1941 */,
  [2,1,2,2,1,2,2,1,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,1,2,4,1,2,1,2,2,1,2,2],
  [1,1,2,1,1,2,1,2,2,2,1,2],
  [2,1,1,2,1,1,2,1,2,2,1,2],
  [2,5,1,2,1,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,3,2,1,2,1,2],
  [1,2,2,2,1,2,1,1,2,1,2,1],
  [2,1,2,2,1,2,1,2,1,2,1,2] /* 1951 */,
  [1,2,1,2,4,1,2,2,1,2,1,2],
  [1,2,1,1,2,2,1,2,2,1,2,2],
  [1,1,2,1,1,2,1,2,2,1,2,2],
  [2,1,4,1,1,2,1,2,1,2,2,2],
  [1,2,1,2,1,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,1,5,2,1,2,2],
  [1,2,2,1,2,1,1,2,1,2,1,2],
  [1,2,2,1,2,1,2,1,2,1,2,1],
  [2,1,2,1,2,5,2,1,2,1,2,1],
  [2,1,2,1,2,1,2,2,1,2,1,2] /* 1961 */,
  [1,2,1,1,2,1,2,2,1,2,2,1],
  [2,1,2,3,2,1,2,1,2,2,2,1],
  [2,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,1,2,1,1,2,1,1,2,2,2],
  [1,2,5,2,1,1,2,1,1,2,2,1],
  [2,2,1,2,2,1,1,2,1,2,1,2],
  [1,2,1,2,2,1,5,2,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,1,1,2,1,2,2,1,2,2,1,2],
  [1,2,1,1,5,2,1,2,2,2,1,2] /* 1971 */,
  [1,2,1,1,2,1,2,1,2,2,2,1],
  [2,1,2,1,1,2,1,1,2,2,1,2],
  [2,2,1,5,1,2,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,1,1,2,1,2],
  [2,2,1,2,1,2,1,5,1,2,1,2],
  [2,1,2,2,1,2,1,2,1,2,1,1],
  [2,1,2,2,1,2,2,1,2,1,2,1],
  [2,1,1,2,1,6,1,2,2,1,2,1],
  [2,1,1,2,1,2,1,2,2,1,2,2],
  [1,2,1,1,2,1,1,2,2,1,2,2] /* 1981 */,
  [2,1,2,3,2,1,1,2,1,2,2,2],
  [2,1,2,1,1,2,1,1,2,1,2,2],
  [2,1,2,2,1,1,2,1,1,5,2,2],
  [1,2,2,1,2,1,2,1,1,2,1,2],
  [1,2,2,1,2,2,1,2,1,2,1,1],
  [2,1,2,1,2,5,2,2,1,2,1,2],
  [1,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,1,2,1,2,1,2,2,2],
  [1,2,1,1,5,1,2,2,1,2,2,2],
  [1,2,1,1,2,1,1,2,1,2,2,2] /* 1991 */,
  [1,2,2,1,1,2,1,1,2,1,2,2],
  [1,2,5,2,1,2,1,1,2,1,2,1],
  [2,2,2,1,2,1,2,1,1,2,1,2],
  [1,2,2,1,2,1,2,5,2,1,1,2],
  [1,2,1,2,2,1,2,1,2,2,1,1],
  [2,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,3,2,2,1,2,2,2,1],
  [2,1,1,2,1,1,2,1,2,2,2,1],
  [2,2,1,1,2,1,1,2,1,2,2,1],
  [2,2,1,5,2,1,1,2,1,2,1,2] /* 2001 */,
  [2,2,1,2,1,2,1,1,2,1,2,1],
  [2,2,1,2,2,1,2,1,1,2,1,2],
  [1,5,2,2,1,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,1,2,1,2,1,5,2,2,1,2,2],
  [1,1,2,1,1,2,1,2,2,2,1,2],
  [2,1,1,2,1,1,2,1,2,2,1,2],
  [2,2,1,1,5,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,1,2,1,2,1] /* 2011 */,
  [2,1,2,5,2,2,1,1,2,1,2,1],
  [2,1,2,2,1,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,1,2,5,2,1,2],
  [1,2,1,1,2,1,2,2,2,1,2,1],
  [2,1,2,1,1,2,1,2,2,1,2,2],
  [1,2,1,2,1,4,1,2,1,2,2,2],
  [1,2,1,2,1,1,2,1,2,1,2,2],
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,1,2,5,2,1,1,2,1,2,1,2],
  [1,2,2,1,2,1,2,1,2,1,2,1] /* 2021 */,
  [2,1,2,1,2,2,1,2,1,2,1,2],
  [1,5,2,1,2,1,2,2,1,2,1,2],
  [1,2,1,1,2,1,2,2,1,2,2,1],
  [2,1,2,1,1,5,2,1,2,2,2,1],
  [2,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,1,2,1,1,2,1,1,2,2,1],
  [2,2,2,1,5,1,2,1,1,2,2,1],
  [2,2,1,2,2,1,1,2,1,1,2,2],
  [1,2,1,2,2,1,2,1,2,1,2,1],
  [2,1,5,2,1,2,2,1,2,1,2,1] /* 2031 */,
  [2,1,1,2,1,2,2,1,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,5,2],
  [1,2,1,1,2,1,2,1,2,2,1,2],
  [2,1,2,1,1,2,1,1,2,2,1,2],
  [2,2,1,2,1,4,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,1,1,2,1,2],
  [2,2,1,2,1,2,1,2,1,1,2,1],
  [2,2,1,2,5,2,1,2,1,2,1,1],
  [2,1,2,2,1,2,1,2,2,1,2,1],
  [2,1,1,2,1,2,2,1,2,2,1,2] /* 2041 */,
  [1,5,1,2,1,2,1,2,2,1,2,2],
  [1,2,1,1,2,1,1,2,2,1,2,2],
  [2,1,2,1,1,2,3,2,1,2,2,2],
  [2,1,2,1,1,2,1,1,2,1,2,2],
  [2,1,2,1,2,1,2,1,1,2,1,2],
  [2,1,2,2,4,1,2,1,1,2,1,2],
  [1,2,2,1,2,2,1,2,1,1,2,1],
  [2,1,2,1,2,2,1,2,2,1,2,1],
  [1,2,4,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,1,1,2,2,1,2,2,2] /* 2051 */,
  [1,2,1,1,2,1,1,5,2,2,2,2],
  [1,2,1,1,2,1,1,2,1,2,2,2],
  [1,2,2,1,1,2,1,1,2,1,2,2],
  [1,2,2,1,2,4,1,1,2,1,2,1],
  [2,2,2,1,2,1,2,1,1,2,1,2],
  [1,2,2,1,2,1,2,2,1,1,2,1],
  [2,1,2,4,2,1,2,1,2,2,1,1],
  [2,1,2,1,2,1,2,2,1,2,2,1],
  [2,1,1,2,1,1,2,2,1,2,2,1],
  [2,2,3,2,1,1,2,1,2,2,2,1] /* 2061 */,
  [2,2,1,1,2,1,1,2,1,2,2,1],
  [2,2,1,2,1,2,3,2,1,2,1,2],
  [2,2,1,2,1,2,1,1,2,1,2,1],
  [2,2,1,2,2,1,2,1,1,2,1,2],
  [1,2,1,2,5,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,2,1,2,1,2,1],
  [2,1,2,1,1,2,2,1,2,2,1,2],
  [1,2,1,5,1,2,1,2,2,2,1,2],
  [2,1,1,2,1,1,2,1,2,2,1,2],
  [2,1,2,1,2,1,1,5,2,1,2,2] /* 2071 */,
  [2,1,2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,1,2,1,2,1],
  [2,1,2,2,1,5,2,1,2,1,2,1],
  [2,1,2,1,2,2,1,2,1,2,1,2],
  [1,2,1,2,1,2,1,2,2,1,2,1],
  [2,1,2,3,2,1,2,2,2,1,2,1],
  [2,1,2,1,1,2,1,2,2,1,2,2],
  [1,2,1,2,1,1,2,1,2,1,2,2],
  [2,1,5,2,1,1,2,1,2,1,2,2],
  [1,2,2,1,2,1,1,2,1,1,2,2] /* 2081 */,
  [1,2,2,2,1,2,3,2,1,1,2,2],
  [1,2,2,1,2,1,2,1,2,1,2,1],
  [2,1,2,1,2,2,1,2,1,2,1,2],
  [1,2,1,1,6,1,2,2,1,2,1,2],
  [1,2,1,1,2,1,2,2,1,2,2,1],
  [2,1,2,1,1,2,1,2,1,2,2,2],
  [1,2,1,5,1,2,1,1,2,2,2,1],
  [2,2,1,2,1,1,2,1,1,2,2,1],
  [2,2,2,1,2,1,1,5,1,2,2,1],
  [2,2,1,2,1,2,1,2,1,1,2,1] /* 2091 */,
  [2,2,1,2,2,1,2,1,2,1,2,1],
  [1,2,2,1,2,4,2,1,2,1,2,1],
  [2,1,1,2,1,2,2,1,2,2,1,2],
  [1,2,1,1,2,1,2,1,2,2,2,1],
  [2,1,2,3,2,1,1,2,2,2,1,2],
  [2,1,2,1,1,2,1,1,2,2,1,2],
  [2,2,1,2,1,1,2,1,1,2,1,2],
  [2,5,2,2,1,1,2,1,1,2,1,2],
  [2,2,1,2,1,2,1,2,1,1,2,1],
  [2,2,1,2,2,1,5,2,1,1,2,1]
];
var element = "Wood,Wood,Fire,Fire,Gold,Gold,Metal,Metal,Water,Water".split(",");
var ddi = "Rat,Ox,Tiger,Rabbit,Dragon,Snake,Horse,Sheep,Monkey,Rooster,Dog,Pig".split( "," );

function getZodiacSignElement(year) {
  year -= 4;
  return element[year % 10];
}

function getZodiacSign(year) {
  year -= 4;
  return ddi[year % 12];
}

function getStar(month, day) {
  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) return "Capricorn";
  if ((month == 2 && day <= 18) || (month == 1 && day >= 21)) return "Aquarius";
  if ((month == 3 && day <= 20) || (month == 2 && day >= 19)) return "Pisces";
  if ((month == 4 && day <= 20) || (month == 3 && day >= 21)) return "Aries";
  if ((month == 5 && day <= 21) || (month == 4 && day >= 21)) return "Taurus";
  if ((month == 6 && day <= 21) || (month == 5 && day >= 22)) return "Gemini";
  if ((month == 7 && day <= 22) || (month == 6 && day >= 22)) return "Cancer";
  if ((month == 8 && day <= 22) || (month == 7 && day >= 23)) return "Leo";
  if ((month == 9 && day <= 23) || (month == 8 && day >= 23)) return "Virgo";
  if ((month == 10 && day <= 23) || (month == 9 && day >= 24)) return "Libra";
  if ((month == 11 && day <= 22) || (month == 10 && day >= 24)) return "Scorpio";
  if ((month == 12 && day <= 21) || (month == 11 && day >= 23)) return "Sagittarious";
}

function getStone(month) {
  var tt = new Array(
    "", "Garnet", "Ametheyst", "Aqamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Tourmaline", "Topaz", "Turquoise"
  );
  return tt[parseInt(month)];
}

function isLeapYear(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}

function getLastDayOfMonth(year, month) {
  var monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
  monthDay[1] = isLeapYear(year) ? 29 : 28;
  return monthDay[month - 1];
}

function getTotalDay(year, month, day) {
  var totalDay =
    (year - 1) * 365 +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400);
  for (var i = 1; i < month; i++) totalDay += getLastDayOfMonth(year, i);
  totalDay += day;
  return totalDay;
}

function getDayOfWeekNum(year, month, day) {
  return getTotalDay(year, month, day) % 7;
}

function getDayOfWeekStr(year, month, day) {
  var dayOfWeek = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
  return dayOfWeek[getDayOfWeekNum(year, month, day)];
}

function getBaseDate(year, month, day) {
  var solYear, solMonth, solDay;
  var lunYear, lunMonth, lunDay;
  var lunLeapMonth, lunMonthDay;
  var solMonthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
  if (year < 1800 || year > 2101) {
    throw "Input range is between 1800 and 2101";
  }
  if (year >= 2080) {
    solYear = 2080; solMonth = 1; solDay = 1; lunYear = 2079; lunMonth = 12; lunDay = 10; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 2060) {
    solYear = 2060; solMonth = 1; solDay = 1; lunYear = 2059; lunMonth = 11; lunDay = 28; lunLeapMonth = 0; solMonthDay[1] = 29;  lunMonthDay = 30;
  } else if (year >= 2040) {
    solYear = 2040; solMonth = 1; solDay = 1; lunYear = 2039; lunMonth = 11; lunDay = 17; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 29;
  } else if (year >= 2020) {
    solYear = 2020; solMonth = 1; solDay = 1; lunYear = 2019; lunMonth = 12; lunDay = 7; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 2000) {
    solYear = 2000; solMonth = 1; solDay = 1; lunYear = 1999; lunMonth = 11; lunDay = 25; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1980) {
    solYear = 1980; solMonth = 1; solDay = 1; lunYear = 1979; lunMonth = 11; lunDay = 14; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1960) {
    solYear = 1960; solMonth = 1; solDay = 1; lunYear = 1959; lunMonth = 12; lunDay = 3; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 29;
  } else if (year >= 1940) {
    solYear = 1940; solMonth = 1; solDay = 1; lunYear = 1939; lunMonth = 11; lunDay = 22; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 29;
  } else if (year >= 1920) {
    solYear = 1920; solMonth = 1; solDay = 1; lunYear = 1919; lunMonth = 11; lunDay = 11; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1900) {
    solYear = 1900; solMonth = 1; solDay = 1; lunYear = 1899; lunMonth = 12; lunDay = 1; lunLeapMonth = 0; solMonthDay[1] = 28; lunMonthDay = 30;
  } else if (year >= 1880) {
    solYear = 1880; solMonth = 1; solDay = 1; lunYear = 1879; lunMonth = 11; lunDay = 20; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1860) {
    solYear = 1860; solMonth = 1; solDay = 1; lunYear = 1859; lunMonth = 12; lunDay = 9; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1840) {
    solYear = 1840; solMonth = 1; solDay = 1; lunYear = 1839; lunMonth = 11; lunDay = 27; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1820) {
    solYear = 1820; solMonth = 1; solDay = 1; lunYear = 1819; lunMonth = 11; lunDay = 16; lunLeapMonth = 0; solMonthDay[1] = 29; lunMonthDay = 30;
  } else if (year >= 1800) {
    solYear = 1800; solMonth = 1; solDay = 1; lunYear = 1799; lunMonth = 12; lunDay = 7; lunLeapMonth = 0; solMonthDay[1] = 28; lunMonthDay = 30;
  }
  return {
    solYear: solYear, solMonth: solMonth, solDay: solDay,
    lunYear: lunYear, lunMonth: lunMonth, lunDay: lunDay,
    solMonthDay: solMonthDay, lunLeapMonth: lunLeapMonth, lunMonthDay: lunMonthDay
  };
}

function calcLunar(year, month, day, type, leapmonth) {
  var baseDate = getBaseDate(year);
  var solYear = baseDate.solYear;
  var solMonth = baseDate.solMonth;
  var solDay = baseDate.solDay;
  var lunYear = baseDate.lunYear;
  var lunMonth = baseDate.lunMonth;
  var lunDay = baseDate.lunDay;
  var solMonthDay = baseDate.solMonthDay;
  var lunLeapMonth = baseDate.lunLeapMonth;
  var lunMonthDay = baseDate.lunMonthDay;
  
  while (true) {
    if (type == 1 && year == solYear && month == solMonth && day == solDay) {
      return {
        solYear: solYear, solMonth: solMonth, solDay: solDay,
        lunYear: lunYear, lunMonth: lunMonth, lunDay: lunDay,
        leapMonth: lunLeapMonth == 1
      };
    }
    if (
      type == 2 &&
      year == lunYear &&
      month == lunMonth &&
      day == lunDay &&
      leapmonth == lunLeapMonth
    ) {
      return {
        solYear: solYear, solMonth: solMonth, solDay: solDay,
        lunYear: lunYear, lunMonth: lunMonth, lunDay: lunDay,
        leapMonth: lunLeapMonth == 1
      };
    }
    if (solMonth == 12 && solDay == 31) {
      solYear++;
      solMonth = 1;
      solDay = 1;
      solMonthDay[1] = isLeapYear(solYear) ? 29 : 28;
    } else if (solMonthDay[solMonth - 1] == solDay) {
      solMonth++;
      solDay = 1;
    } else {
      solDay++;
    }
    var lunIndex = lunYear - 1799;
    if (
      lunMonth == 12 &&
      ((lunarMonthTable[lunIndex][lunMonth - 1] == 1 && lunDay == 29) ||
        (lunarMonthTable[lunIndex][lunMonth - 1] == 2 && lunDay == 30))
    ) {
      lunYear++;
      lunMonth = 1;
      lunDay = 1;
      lunIndex = lunYear - 1799;
      if (lunarMonthTable[lunIndex][lunMonth - 1] == 1) {
        lunMonthDay = 29;
      } else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2) {
        lunMonthDay = 30;
      }
    } else if (lunDay == lunMonthDay) {
      if (lunarMonthTable[lunIndex][lunMonth - 1] >= 3 && lunLeapMonth == 0) {
        lunDay = 1;
        lunLeapMonth = 1;
      } else {
        lunMonth++;
        lunDay = 1;
        lunLeapMonth = 0;
      }
      if (lunarMonthTable[lunIndex][lunMonth - 1] == 1) {
        lunMonthDay = 29;
      } else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2) {
        lunMonthDay = 30;
      } else if (lunarMonthTable[lunIndex][lunMonth - 1] == 3) {
        lunMonthDay = 29;
      } else if (
        lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
        lunLeapMonth == 0
      ) {
        lunMonthDay = 29;
      } else if (
        lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
        lunLeapMonth == 1
      ) {
        lunMonthDay = 30;
      } else if (
        lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
        lunLeapMonth == 0
      ) {
        lunMonthDay = 30;
      } else if (
        lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
        lunLeapMonth == 1
      ) {
        lunMonthDay = 29;
      } else if (lunarMonthTable[lunIndex][lunMonth - 1] == 6) {
        lunMonthDay = 30;
      }
    } else {
      lunDay++;
    }
  }
}

function getLunar(year, month, day) {
  var o = calcLunar(year, month, day, 1);
  o.dayOfWeekStr = getDayOfWeekStr(year, month, day);
  o.dayOfWeekNum = getDayOfWeekNum(year, month, day);
  return o;
}

function match() {
	var dateInput = document.getElementById("dateBirth").value;
	var date = new Date(dateInput);
	date.setDate(date.getDate() + 1);
	var solYear = date.getFullYear();
	var solMonth = date.getMonth() + 1;
	var solDay = date.getDate();
	var dateLunar = getLunar(solYear, solMonth, solDay);
	var lunYear = dateLunar.lunYear;
	var lunMonth = dateLunar.lunMonth;
	var lunDay = dateLunar.lunDay;
	var r_lunar = "<p style='color:#D5D8DC'>Your lunar birthday is " + lunMonth + '/' + lunDay + '/' + lunYear + "</p>" ;
	var r_dow = "<p style='color:#D5D8DC'>You were born on " + getDayOfWeekStr(solYear, solMonth, solDay) + "</p>";
	var r_color = "<p style='color:#D5D8DC'>Your element is " + getZodiacSignElement(lunYear) + "</p>";	
	var r_ganji = "<p style='color:#32A80F'>You were born in the year of " + getZodiacSign(lunYear) + "</p>";
	var r_star = "<p style='color:#32A80F'>Your zodiac constellation is " + getStar(solMonth, solDay) + "</p>";
	var r_stone = "<p style='color:#32A80F'>Your birthstone is " + getStone(solMonth) + "</p>";
	return document.getElementById("result").innerHTML = r_lunar + r_dow + r_color + r_ganji + r_star + r_stone ;
}

function reset() {
	document.getElementById("result").innerHTML = "";
	document.getElementById("dateBirth").setFullYear("2020","01","01");
	return document;
}
