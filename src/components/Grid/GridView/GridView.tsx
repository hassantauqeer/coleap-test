import React from 'react';

export interface IGridView {
    children: any,
}

const GridView = (props: IGridView) => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-24 px-12">
                {
                    props.children
                }
            </div>
        </section>
    )
}
export default GridView;
