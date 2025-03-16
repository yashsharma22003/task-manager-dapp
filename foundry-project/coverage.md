Compiling 22 files with Solc 0.8.28
Solc 0.8.28 finished in 4.42s
Compiler run successful!
Analysing contracts...
Running tests...

Ran 5 tests for test/TaskManager.t.sol:TaskManagerTest
[PASS] testAddTask() (gas: 140703)
[PASS] testDeleteTask() (gas: 108740)
[PASS] testEditTask() (gas: 148113)
[PASS] testMarkTask() (gas: 143516)
[PASS] testOnlyOwnerCanModify() (gas: 143115)
Suite result: ok. 5 passed; 0 failed; 0 skipped; finished in 4.42ms (3.74ms CPU time)

Ran 1 test suite in 18.53ms (4.42ms CPU time): 5 tests passed, 0 failed, 0 skipped (5 total tests)

╭--------------------------------+-----------------+-----------------+---------------+---------------╮
| File                           | % Lines         | % Statements    | % Branches    | % Funcs       |
+====================================================================================================+
| script/DeployTaskManager.s.sol | 0.00% (0/5)     | 0.00% (0/5)     | 100.00% (0/0) | 0.00% (0/1)   |
|--------------------------------+-----------------+-----------------+---------------+---------------|
| src/TaskManager.sol            | 100.00% (40/40) | 100.00% (41/41) | 100.00% (9/9) | 100.00% (6/6) |
|--------------------------------+-----------------+-----------------+---------------+---------------|
| Total                          | 88.89% (40/45)  | 89.13% (41/46)  | 100.00% (9/9) | 85.71% (6/7)  |
╰--------------------------------+-----------------+-----------------+---------------+---------------╯
