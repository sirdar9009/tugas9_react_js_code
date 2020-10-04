import React, {Component} from 'react';
import
{
Table,
ProgressBar,
Pagination,
Row
} from 'react-bootstrap';
import Datatransfer from '../listdata/Datatransfer';



class Semuatf extends Component {
	 render() {	

	
		return(
		<>
		<Table size="sm">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Nama Pemain</th>
		      <th>Tim</th>
		      <th>Transfer</th>
		      <th>Proses</th>
		    </tr>
		  </thead>			
		{Datatransfer.map((row, index)=> {
	    return (
	      <tr key={index}>
	      	<td>{index+1}</td>
	        <td>{row.nm}</td>
	        <td>{row.tim}</td>
	        <td>{row.transfer}</td>
	        <td>	        		        	
				<ProgressBar animated now={row.proses} label={`${row.proses}%`}/>
	        </td>
	      </tr>
		    )
		})}
		</Table>
			<Row>
				<Pagination>
				  <Pagination.First />
				  <Pagination.Prev />
				  <Pagination.Item active>{1}</Pagination.Item>
				  <Pagination.Ellipsis />

				  <Pagination.Item>{10}</Pagination.Item>
				  <Pagination.Item>{11}</Pagination.Item>
				  <Pagination.Item>{12}</Pagination.Item>
				  <Pagination.Item>{13}</Pagination.Item>
				  <Pagination.Item>{14}</Pagination.Item>

				  <Pagination.Ellipsis />
				  <Pagination.Item>{20}</Pagination.Item>
				  <Pagination.Next />
				  <Pagination.Last />
				</Pagination>
			</Row>
		</>
	)	    
	}

}
export default Semuatf;
