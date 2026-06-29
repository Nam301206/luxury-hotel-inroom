
// =====================================================================
// MOCK DATA — XÓA KHI NGƯỜI 2 XONG API
// Thay bằng: fetch('http://localhost:3000/api/posts/pending') v.v.
// Người 5 phụ trách ghép API thật vào Giai đoạn 5
// =====================================================================
const MOCK_POSTS = [
  {id:'p1',customer:'Trần Thị B',room:'P101',content:'Phòng sạch sẽ, view đẹp, nhân viên phục vụ tận tình. Rất hài lòng với trải nghiệm lần này!',images:3,time:'08:42',status:'PENDING'},
  {id:'p2',customer:'Nguyễn Văn C',room:'P205',content:'Giường rất thoải mái, phòng thơm. Tuy nhiên wifi hơi yếu ở khu vực ban công.',images:2,time:'09:15',status:'PENDING'},
  {id:'p3',customer:'Lê Thị D',room:'P312',content:'Nhìn chung ổn, nhưng phòng tắm cần vệ sinh kỹ hơn một chút.',images:1,time:'09:31',status:'PENDING'},
  {id:'p4',customer:'Phạm Quốc E',room:'P408',content:'Tuyệt vời! Mọi thứ hoàn hảo. Chắc chắn sẽ quay lại lần sau.',images:4,time:'09:55',status:'PENDING'},
];
// Mock nhân viên — thay bằng GET /api/cleaning-reviews/employee/:id
const MOCK_STAFF = [
  {id:'e1',name:'Hoàng Thị F',total:12,s3:9,s2:2,s1:1,avg:2.67,
   detail:[{date:'27/06',room:'P101',score:3,note:'Phòng rất sạch'},{date:'27/06',room:'P203',score:2,note:'Bình thường'},{date:'26/06',room:'P305',score:3,note:'Tốt'},{date:'26/06',room:'P410',score:1,note:'Còn bụi góc phòng'}]},
  {id:'e2',name:'Vũ Văn G',total:10,s3:7,s2:2,s1:1,avg:2.60,
   detail:[{date:'27/06',room:'P102',score:3,note:'Sạch sẽ'},{date:'27/06',room:'P208',score:2,note:'Ổn'},{date:'26/06',room:'P301',score:3,note:'Tốt'}]},
  {id:'e3',name:'Bùi Thị H',total:8,s3:4,s2:3,s1:1,avg:2.38,
   detail:[{date:'27/06',room:'P103',score:2,note:'Bình thường'},{date:'27/06',room:'P210',score:3,note:'Khá sạch'},{date:'26/06',room:'P302',score:1,note:'Chưa lau gương'}]},
  {id:'e4',name:'Đỗ Minh I',total:8,s3:2,s2:3,s1:3,avg:1.88,
   detail:[{date:'27/06',room:'P104',score:1,note:'Chưa sạch'},{date:'27/06',room:'P211',score:2,note:'Tạm'},{date:'26/06',room:'P303',score:1,note:'Còn mùi'}]},
];
// =====================================================================
// END MOCK DATA
// =====================================================================

let posts = MOCK_POSTS.map(p=>({...p}));
let curFilter = 'PENDING';
let curStaff = null;

function go(name, el) {
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('on'));
  document.getElementById('sc-'+name).classList.add('on');
  el.classList.add('on');
  const titles={overview:'Tổng quan',mod:'Bài đăng',reviews:'Nhận xét tổng hợp',perf:'Hiệu suất nhân viên'};
  document.getElementById('tt').textContent=titles[name];
  document.getElementById('ts').textContent=name==='overview'?'Xin chào, Nguyễn Văn A':'Manager · LHMS';
  if(name==='mod')renderMod();
  if(name==='reviews')renderRv();
  if(name==='perf'){curStaff=null;renderPerf();}
}

function pending(){return posts.filter(p=>p.status==='PENDING')}
function byStatus(s){return s==='ALL'?posts:posts.filter(p=>p.status===s)}

function setFilter(f,el){
  curFilter=f;
  document.querySelectorAll('.ft').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderMod();
}

function updateCounts(){
  const pn=pending().length;
  document.getElementById('nb').textContent=pn;
  document.getElementById('ov-pend').textContent=pn;
  document.getElementById('fc-p').textContent=posts.filter(p=>p.status==='PENDING').length;
  document.getElementById('fc-a').textContent=posts.filter(p=>p.status==='APPROVED').length;
  document.getElementById('fc-r').textContent=posts.filter(p=>p.status==='REJECTED').length;
  document.getElementById('fc-all').textContent=posts.length;
}

function renderOv(){
  const p=pending().slice(0,3);
  document.getElementById('ov-tb').innerHTML=p.length?p.map(x=>`
    <tr>
      <td><div class="pa">${x.customer}</div><div class="pp">Phòng ${x.room}</div></td>
      <td style="color:var(--mu);font-size:11px;max-width:0">${x.content}</td>
      <td><span class="ic"><i class="ti ti-photo" style="font-size:11px" aria-hidden="true"></i>${x.images}</span></td>
      <td><span class="tag">${x.time}</span></td>
      <td><div class="ta"><button class="bv" onclick="openMod('${x.id}')">Xem</button><button class="bap" onclick="approve('${x.id}')">Duyệt</button><button class="brj" onclick="reject('${x.id}')">Từ chối</button></div></td>
    </tr>`).join('')
  :`<tr><td colspan="5"><div class="empty"><i class="ti ti-inbox" aria-hidden="true"></i><p>Không có bài chờ duyệt</p></div></td></tr>`;
  updateCounts();
}

function renderMod(){
  const q=document.querySelector('.sb2 input')?.value||'';
  let p=byStatus(curFilter).filter(x=>!q||x.customer.toLowerCase().includes(q.toLowerCase())||x.content.toLowerCase().includes(q.toLowerCase()));
  const bdgMap={PENDING:'<span class="bdg bp">Chờ duyệt</span>',APPROVED:'<span class="bdg ba">Đã duyệt</span>',REJECTED:'<span class="bdg br">Từ chối</span>'};
  document.getElementById('mod-tb').innerHTML=p.length?p.map(x=>`
    <tr>
      <td><div class="pa">${x.customer}</div><div class="pp">Phòng ${x.room}</div></td>
      <td style="color:var(--mu);font-size:11px;max-width:0">${x.content}</td>
      <td><span class="ic"><i class="ti ti-photo" style="font-size:11px" aria-hidden="true"></i>${x.images}</span></td>
      <td><span class="tag">${x.time}</span></td>
      <td>${bdgMap[x.status]}</td>
      <td><div class="ta">
        <button class="bv" onclick="openMod('${x.id}')"><i class="ti ti-eye" style="font-size:11px" aria-hidden="true"></i></button>
        ${x.status==='PENDING'?`<button class="bap" onclick="approve('${x.id}')">Duyệt</button><button class="brj" onclick="reject('${x.id}')">Từ chối</button>`:''}
      </div></td>
    </tr>`).join('')
  :`<tr><td colspan="6"><div class="empty"><i class="ti ti-inbox" aria-hidden="true"></i><p>Không có bài nào</p></div></td></tr>`;
  updateCounts();
}

function renderRv(){
  document.getElementById('rv-tb').innerHTML=MOCK_STAFF.map(s=>`
    <tr>
      <td><div class="pa">${s.name}</div></td>
      <td>${s.total}</td>
      <td><span style="color:var(--ok);font-weight:600">${s.s3}</span></td>
      <td><span style="color:var(--gold);font-weight:600">${s.s2}</span></td>
      <td><span style="color:var(--err);font-weight:600">${s.s1}</span></td>
      <td><div class="bar-w"><div class="bar"><div class="bf ${s.avg>=2.5?'':'w'}" style="width:${(s.avg/3*100).toFixed(0)}%"></div></div><span class="bn" style="color:${s.avg>=2.5?'var(--ok)':'var(--warn)'}">${s.avg.toFixed(2)}</span></div></td>
    </tr>`).join('');
}

function getPL(avg){
  if(avg>=2.7)return{l:'Xuất sắc',c:'pe'};
  if(avg>=2.3)return{l:'Tốt',c:'pg'};
  if(avg>=1.7)return{l:'Trung bình',c:'pw'};
  return{l:'Cần cải thiện',c:'pp2'};
}

function renderPerf(){
  document.getElementById('perf-list').style.display='block';
  document.getElementById('perf-detail').style.display='none';
  const sorted=[...MOCK_STAFF].sort((a,b)=>b.avg-a.avg);
  document.getElementById('pf-tb').innerHTML=sorted.map((s,i)=>{
    const pl=getPL(s.avg);
    const rankColor=i===0?'var(--gold-s)':i===1?'var(--mu)':i===2?'#cd7f32':'var(--mu)';
    return`<tr>
      <td><span style="font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:${rankColor}">${i+1}</span></td>
      <td><div class="pa">${s.name}</div></td>
      <td><div class="bar-w"><div class="bar"><div class="bf ${s.avg>=2.5?'':'w'}" style="width:${(s.avg/3*100).toFixed(0)}%"></div></div><span class="bn" style="color:${s.avg>=2.5?'var(--ok)':'var(--warn)'}">${s.avg.toFixed(2)}</span></div></td>
      <td><span style="color:var(--mu);font-size:12px">${s.total}</span></td>
      <td><span class="pb ${pl.c}">${pl.l}</span></td>
      <td><button class="bv" onclick="showStaffDetail('${s.id}')"><i class="ti ti-arrow-right" style="font-size:12px" aria-hidden="true"></i></button></td>
    </tr>`;
  }).join('');
}

function showStaffDetail(id){
  const s=MOCK_STAFF.find(x=>x.id===id);
  curStaff=s;
  document.getElementById('perf-list').style.display='none';
  const pl=getPL(s.avg);
  const rows=s.detail.map(d=>{
    const sc=d.score===3?'<span class="bdg ba">Sạch (3đ)</span>':d.score===2?'<span style="background:rgba(216,189,138,.15);color:var(--gold);display:inline-flex;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:700">Bình thường (2đ)</span>':'<span class="bdg br">Chưa sạch (1đ)</span>';
    return`<tr><td>${d.date}</td><td>${d.room}</td><td>${sc}</td><td style="color:var(--mu);font-size:11px">${d.note}</td></tr>`;
  }).join('');
  document.getElementById('perf-detail').innerHTML=`
    <div class="staff-detail">
      <div class="sd-head">
        <div><div class="sd-name">${s.name}</div><div class="sd-meta">Nhân viên tạp vụ · <span class="pb ${pl.c}" style="font-size:10px">${pl.l}</span></div></div>
        <button class="back-btn" onclick="renderPerf()"><i class="ti ti-arrow-left" style="font-size:13px" aria-hidden="true"></i> Quay lại</button>
      </div>
      <div class="detail-stats">
        <div class="ds"><div class="dsn">${s.avg.toFixed(2)}</div><div class="dsl">Điểm TB / 3</div></div>
        <div class="ds"><div class="dsn">${s.total}</div><div class="dsl">Tổng lượt</div></div>
        <div class="ds"><div class="dsn">${((s.s3/s.total)*100).toFixed(0)}%</div><div class="dsl">Tỷ lệ sạch</div></div>
      </div>
      <table><thead><tr><th style="width:18%">Ngày</th><th style="width:18%">Phòng</th><th style="width:28%">Đánh giá</th><th>Ghi chú</th></tr></thead>
      <tbody>${rows}</tbody></table>
    </div>`;
  document.getElementById('perf-detail').style.display='block';
}

function openMod(id){
  const p=posts.find(x=>x.id===id);
  if(!p)return;
  const imgs=Array.from({length:p.images},()=>`<div class="ip"><i class="ti ti-photo" aria-hidden="true"></i></div>`).join('');
  const canAct=p.status==='PENDING';
  document.getElementById('modal-body').innerHTML=`
    <div class="mi">${imgs}</div>
    <div class="mct">${p.content}</div>
    <div class="mm">
      <div class="mit">Khách: <span>${p.customer}</span></div>
      <div class="mit">Phòng: <span>${p.room}</span></div>
      <div class="mit">Gửi lúc: <span>${p.time}</span></div>
      <div class="mit">Trạng thái: <span>${p.status==='PENDING'?'Chờ duyệt':p.status==='APPROVED'?'Đã duyệt':'Từ chối'}</span></div>
    </div>
    ${canAct?`<div class="ma">
      <button class="bma" onclick="approve('${id}');closeModD()"><i class="ti ti-check" aria-hidden="true"></i> Duyệt bài này</button>
      <button class="bmr" onclick="reject('${id}');closeModD()"><i class="ti ti-x" aria-hidden="true"></i> Từ chối</button>
    </div>`:`<div style="text-align:center;color:var(--mu);font-size:12px;padding:8px 0">Bài đăng này đã được xử lý</div>`}`;
  document.getElementById('modal-bg').classList.add('open');
}
function closeMod(e){if(e.target===document.getElementById('modal-bg'))closeModD()}
function closeModD(){document.getElementById('modal-bg').classList.remove('open')}

function approve(id){
  posts=posts.map(p=>p.id===id?{...p,status:'APPROVED'}:p);
  toast('Đã duyệt bài đăng','ok');
  refresh();
}
function reject(id){
  posts=posts.map(p=>p.id===id?{...p,status:'REJECTED'}:p);
  toast('Đã từ chối bài đăng','w');
  refresh();
}
function refresh(){
  renderOv();
  const active=document.querySelector('.sc.on').id;
  if(active==='sc-mod')renderMod();
}

function toast(msg,type='ok'){
  const tc=document.getElementById('tc');
  const t=document.createElement('div');
  t.className=`toast to${type}`;
  const ic={ok:'ti-circle-check',w:'ti-alert-triangle',e:'ti-circle-x'};
  t.innerHTML=`<i class="ti ${ic[type]||'ti-info-circle'}" aria-hidden="true"></i>${msg}`;
  tc.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModD()});
updateCounts();
renderOv();
