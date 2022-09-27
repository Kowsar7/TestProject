import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import classes from './PaginationItems.module.css'
import PaginationItem from './PaginationItem/PaginationItem';

function PaginationItems(props) {
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <Auxiliary>
            <div className={classes.Items}>
                {currentItems.map(item => (
                    <PaginationItem 
                        className={classes.Item} 
                        key={item.id}
                        title={item.title}
                        body={item.body}
                        userId={item.userId}
                        id={item.id} />
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={classes.Pagination}
                pageLinkClassName={classes.PageNum}
                nextLinkClassName={classes.PageNP}
                previousLinkClassName={classes.PageNP}
                activeLinkClassName={classes.Active}
            />
        </Auxiliary>
    );
}

export default PaginationItems