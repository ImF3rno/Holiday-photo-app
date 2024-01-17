import Work from "../work/Work";

const WorksTable = (props) => {
    return (
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {props.data?.map((work) => (
                <Work key={work.id} id={work.id} url={work.url}/>
            ))}
        </div>
    );
};

export default WorksTable;
