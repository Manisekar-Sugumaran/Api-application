var create = (ele) => document.createElement(ele);
async function fetchd(){
    var response= await fetch("https://api.github.com/users/fdpanda/repos")
    var data= await response.json()
    myapp(data) 
    return data
    
}
fetchd().catch(function(err){
    console.log(err)
})

function myapp(api){
   var tbody = document.getElementById('tbody');
   api.map (data => {
    var tr = create('tr');
    
    var td1 = create('td');
    td1.innerHTML = data.name;
    tr.append(td1);
    console.log(data.name)
    
    var td2 = create('td');
    td2.innerHTML = data.forks_count;
    tr.append(td2);
    console.log(data.forks_count)
    
    var td3 = create('td');
    td3.innerHTML = data.stargazers_count;
    tr.append(td3);
    console.log(data.stargazers_count)
    
    var td4 = create('td');
    // td4.innerHTML = `<img src="${data.owner.avatar_url}" height="100px" width="100px"  />`
    var img = create('img');
    img.setAttribute('src',`${data.owner.avatar_url}`)
    img.setAttribute('height', '100px');
    img.setAttribute('width', '100px');
    td4.append(img)
    tr.append(td4);
    console.log(data.owner.avatar_url)
    
    var td5 = create('td');
    td5.innerHTML = `<a href="${data.owner.html_url}" target="-blank"> Repo link `;
    tr.append(td5);
    console.log(data.owner.html_url)
    tbody.append(tr);
   }) 
  console.log(api)
}

