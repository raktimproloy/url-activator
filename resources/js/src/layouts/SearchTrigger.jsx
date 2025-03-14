import { Modal } from 'react-bootstrap';

const SearchTrigger = ({ trigger, close }) => {
    return (
        <Modal show={trigger} onHide={close} className="modal fade search-area" id="search-modal">
            <div className="modal-content">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        close();
                    }}
                >
                    <input type="text" placeholder="Search here..." />
                    <button className="search-btn">
                        <i className="fa fa-search" />
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default SearchTrigger;
