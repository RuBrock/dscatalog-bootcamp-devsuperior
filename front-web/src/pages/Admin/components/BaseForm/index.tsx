import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss'

type Props = {
    title: string;
    children: React.ReactNode;
}

const BaseForm = ({ title, children }: Props) => {
    const history = useHistory();

    const handleCancel = () => {
        history.goBack();
    }

    return (
        <div className="admin-base-form card-base bd-radius-20">
            <h1 className="base-form-title">
                {title}
            </h1>
            {children}
            <div className="base-form-actions">
                <button 
                    type="button"
                    className="btn btn-outline-danger border-radius-10 mr-3"
                    onClick={handleCancel}
                >
                    CANCELAR
                </button>

                <button className="btn btn-primary border-radius-10 mr-3">
                    SALVAR
                </button>
            </div>
        </div>
    );
}

export default BaseForm;