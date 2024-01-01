"use client"
import React, { useState,  useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";


const Spreadsheet = () => {
  const [rowData, setRowData] = useState([]);
  


  const columns = useMemo(
    () => [
      {
        Header: "S.No",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Indiabix",
        accessor: "apti",
      },
      {
        Header: "Leetcode",
        accessor: "leet",
      },
      {
        Header: "Github",
        accessor: "git",
        
      },
      {
        Header: "GD",
        accessor: "gd",
      },
      {
        Header: "Comm",
        accessor: "communication",
      },
      {
        Header: "Long coding",
        accessor: "long",
      },
      {
        Header: "Linkedin",
        accessor: "linkedin",
      },
      {
        Header: "SkillRack",
        accessor: "skillrack",
      },
    ],
    []
  );

  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable({ columns, data: rowData }, useSortBy, usePagination);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 className="custom-heading">Daily goal</h1>

        <div className=" overflow-x-auto">
          <table {...getTableProps()} className="divide-y divide-gray-200">
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>{column.isSortedDesc ? " ⬇️ " : " ⬆️ "}</span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr key={index} {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td
                          key={index}
                          {...cell.getCellProps()}
                          className="px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="btn-container">
          <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>
            First
          </button>

          <button disabled={!canPreviousPage} onClick={previousPage}>
            Prev
          </button>

          <span>
            {pageIndex + 1}_of_{pageCount}
          </span>

          <button disabled={!canNextPage} onClick={nextPage}>
            Next
          </button>

          <button
            disabled={pageIndex >= pageCount - 1}
            onClick={() => gotoPage(pageCount - 1)}
          >
            Last
          </button>
        </div>
      </div>
    </>
  );
};

export default Spreadsheet;
