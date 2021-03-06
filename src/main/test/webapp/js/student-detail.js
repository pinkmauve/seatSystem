/**
 * Created by jian on 2017/10/29.
 */
$(()=> {
    "use strict";
    let flag = true;
    let obj = {
        // 编辑学员信息
        editSeatInfo() {
            let flag = true;
            let inputList = $("#js-student-detail input");
            $("#js-edit-seat-info").click(function () {
                inputList.addClass("edit");
                inputList.attr("disabled", false);
                if (flag) {
                    $(".js-info-title").html("编辑学员信息");
                    $(this).html("保存");
                    $(".js-seat-num").parent().addClass("hidden");
                    $(".js-stage").parent().addClass("hidden");
                    $(".js-student-type").removeClass("hidden");
                    $(".js-select-stage").removeClass("hidden");
                } else {
                    $(this).html("编辑座位信息");
                    inputList.removeClass("edit");
                    inputList.attr("disabled", true);
                    $(".js-info-title").html("学员详细信息");

                    $(".js-seat-num").parent().removeClass("hidden");
                    $(".js-stage").parent().removeClass("hidden");
                    $(".js-student-type").addClass("hidden");
                    $(".js-select-stage").addClass("hidden");
                }
                flag = !flag;
            });
        },

        // 显示教室座位
        showClassRoom(leftNum, item){
            let html1 = "";
            for (let i = 0; i < leftNum; i++) {
                html1 += ` <li><div class='student-item'></div><p class='student-name'></p></li>`;
            }
            $("#js-seat-left").html(html1);
            // 如果座位表为左2右3 第2 7 12...等差数列的 li 右边距 li:nth-of-type(5n-3)
            // 如果座位表为左3右2 第3 8 13...等差数列的 li 右边距 li:nth-of-type(5n-2)
            let clientW = ($(window).width());
            if(clientW>1200){
                $("li:nth-of-type(5n-2)").addClass('mR120');
            }else if(clientW>768 && clientW<1200){
                $("li:nth-of-type(5n-2)").addClass('mR60');
            }else{
                $("li:nth-of-type(5n-2)").addClass('mR5');
            }
        },
        // 更改教室类型
        changeClassRoom() {
            // 获取游览器宽
            if (flag) {
                // 游览器宽度大于1200
                this.showClassRoom(35, 0)
                flag = false;
            }
        }

    };
    // 监听游览器窗口缩放后重新刷新页面防止页面失真
    $(window).resize(function () {
        // obj.changeClassRoom();
        location.reload();
    });

    // 座位点击事件

    obj.editSeatInfo();
    obj.changeClassRoom();
    let seatNumV = $(".js-seat-num");//座位号
    let studentNameV = $(".js-student-name");//学生名字
    let teacherNameV = $(".js-teacher-name");//老师名字
    let certificateV = $(".js-certificate");//学历
    let majorV = $(".js-major");//专业
    let isPrimaryV = $(".js-is-primary");//是否有基础
    let sourceV = $(".js-source");//信息来源
    let situationV = $(".js-situation");//情况
    let studyTimeV = $(".js-study-time");//学习时长
    let stageV = $(".js-stage");//阶段

    $("#js-seat-list ul li .student-item").each(function (i) {
        let This = $(this);
        This.click(function () {
            This.addClass("disabled");
            randomNum(Math.floor(Math.random() * 1000));
        });
    });

    //生成随机数
    function randomNum(rdn) {
        seatNumV.val(rdn * 1);
        studentNameV.val(rdn * 3);
        teacherNameV.val(rdn * 2);
        certificateV.val(rdn * 8);
        majorV.val(rdn * 9);
        isPrimaryV.val(rdn + 20);
        sourceV.val(rdn - 99);
        situationV.val(rdn + 39);
        studyTimeV.val(rdn + 234);
        stageV.val(rdn - 3);
    }
});