import React from "react";
import ReactDataGrid from "react-data-grid";

const columns = [
  { key: "id", name: "NO", editable: true },
  { key: "SystemName", name: "시스템명", editable: true },
  { key: "SystemIP", name: "시스템IP", editable: true },
  { key: "HostName", name: "HOST NAME", editable: true },
  { key: "HostOs", name: "HOST OS", editable: true }

];

const rows = [
  { id: 1, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 2, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 3, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 4, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 5, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 6, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 7, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 8, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 9, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'},
  { id: 10, SystemName: "	SRC_server", SystemIP: '192.168.0.28' ,HostName:'cretinfo1' , HostOs: 'Linux 2.6.32-279.el6.x86_64'}
];

class SimpleGrid extends React.Component {
  state = { rows };  

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };



  render() {
    return (
          <div className="cont">
            <div className="inner">
                <div className="top_title_box">
                    <h3>시스템 정보관리 <span>총 10건이 검색되었습니다.</span></h3>
                    <div className="right_btn">
                        <button type="button" className="ic_btn"><i className="i_refresh"></i>새로고침</button>
                        <button type="button" className="ic_btn"><i className="i_add"></i>추가</button>
                        <button type="button" className="ic_btn"><i className="i_del"></i>삭제</button>
                    </div>
                </div>
                <div className="basic_tbl">
                
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={10}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
        rowSelection={{
          showCheckbox: true,
          enableShiftSelect: true,
          onRowsSelected: this.onRowsSelected,
          onRowsDeselected: this.onRowsDeselected,
          selectBy: {
            indexes: this.state.selectedIndexes
          }
        }}
      />
               
               </div>
            </div>
            <div className="inner">
                <div className="top_title_box">
                    <h4>시스템 상세정보</h4>
                    <div className="right_btn">
                        <button type="button" className="ic_btn"><i className="i_modify"></i>수정</button>
                        <button type="button" className="ic_btn"><i className="i_cancle"></i>취소</button>
                    </div>
                </div>
                <div className="form_box w600">
                    <div className="txt_input">
                        <label for="tt1">시스템 명</label>
                        <input type="text" id="tt1" name="" value="SRC_server"/>
                    </div>
                    <div className="txt_input btr">
                        <label for="tt2">시스템 IP</label>
                        <input type="text" id="tt2" name="" value=""/>
                        <button type="button" className="btn square">서버정보</button>
                    </div>
                    <div className="txt_input">
                        <label for="tt3">HOST NAME</label>
                        <input type="text" id="tt3" name="" value="cretinfo1" readonly={true}/>
                    </div>
                    <div className="txt_input">
                        <label for="tt4">HOST OS</label>
                        <input type="text" id="tt4" name="" value="Linux 2.6.32-279.el6.x86_64" readonly={true}/>
                    </div>
                </div>
            </div>
          
          </div>
            

            
               

    );
  }
}

export default SimpleGrid;