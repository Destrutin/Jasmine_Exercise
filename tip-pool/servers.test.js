describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should not add a new server to allServers on submitServerInfo() if serverName has no evt', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create table row element and pass to appendTd function with input value', function() {
    submitServerInfo();
    updateServerTable();

    let newServerTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(newServerTdList.length).toEqual(2);
    expect(newServerTdList[0].innerText).toEqual('Alice')
    expect(newServerTdList[1].innerText).toEqual('$0.00')
  })

  afterEach(function() {
    // teardown logic
    serverTbody.innerText = '';
    allServers = {};
    serverId = 0;
  });
});