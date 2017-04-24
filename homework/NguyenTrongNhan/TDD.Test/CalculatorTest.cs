using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TDD.Core;

namespace TDD.Test
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void TestAdd()
        {
            Assert.AreEqual(3, Calculator.Add(1, 2));
        }

        [TestMethod]
        public void TestSubtract()
        {
            Assert.AreEqual(2, Calculator.Subtract(4, 2));
        }
    }
}
