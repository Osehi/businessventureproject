import React from 'react';
import styled from 'styled-components';

const SectionHeader =() => {

    const SetSectionHeader = styled.div`
        .sectionHeaderSet {
           display:flex;
           align-items: center;
           justify-content: center;
           padding: 5rem;


           .service-header{
               width: 100%;
               text-align: center;
           }
        }
    `

    const FirstLine = styled.div`
            height:4px;
            background-color:blue;
            width: 100%;
    `

    const SecondLine = styled.div`
            background-color:red;
            width: 100%;
            height: 4px;

    `

    return (
        <SetSectionHeader>
        <div className="sectionHeaderSet">
            <FirstLine>
            </FirstLine>
            <div className="service-header">
                <h4>
                    Select One Of Our Service
                </h4>
            </div>
            <SecondLine>
            </SecondLine>
        </div>
        </SetSectionHeader>
    )

};

export default SectionHeader;