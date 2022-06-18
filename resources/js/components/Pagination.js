



class Pagination extends Component{

    render() {
        return <ReactPaginate
            pageCount={pageCount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
        />
    }
}

export default Pagination;

if (document.getElementById('pagination')) {
    ReactDOM.render(<Pagination />, document.getElementById('pagination'));
}

